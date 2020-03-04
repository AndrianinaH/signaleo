import React from 'react';
import {
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    withIonLifeCycle,
    IonLabel,
    IonCol,
    IonRow,
    IonGrid,
    IonChip,
    IonSegment,
    IonSegmentButton,
    IonAlert,
    IonBadge,
    IonCard,
    IonCardSubtitle,
    IonImg,
    IonItem,
    IonAvatar,
    IonList,
    IonLoading,
} from '@ionic/react';
import './Actualite.css';
import {RefresherEventDetail} from '@ionic/core';

import Header from '../../components/Navigation/Header';
import {
    add,
    alarmOutline,
    car,
    location,
    thumbsDownOutline,
    thumbsUpOutline
} from 'ionicons/icons';
import Axios from 'axios';
import HTTP_BASE_URL from '../../Constant/HttpConstant';
import img from "../../assets/emboutaka.png";
import {Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed} from '@capacitor/core';

const {Storage, PushNotifications} = Plugins;

const INITIAL_STATE = {
    notifications: [{id: 'id', title: "Test Push", body: "This is my first push notification"}],
};

/**
 * Class actualite ,
 *
 * Receive actualite , map actualite
 */
class Actualite extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            actu: [],
            user: null,
            showLoading: true,
            alert: {
                isShow: false,
                message: ''
            },
            pushNotification: {...INITIAL_STATE}
        };
    }

    async getObject() {
        const ret = await Storage.get({key: 'user'});
        const user = JSON.parse(ret && ret.value ? ret.value : '{"user":null}');

        if (user.id) {
            this.setState({
                user: user,
            })
        } else {
            this.props.history.push('/login');
        }
    }

    ionViewWillEnter() {
        this.getObject().then(() => {
            this.getData();
        });

        document.getElementsByTagName("ion-tab-bar")[0].style.display = 'inherit';
    }

    getData = () => {
        Axios.post(HTTP_BASE_URL + '/api/actualite/list').then(res => {
            this.setState({
                actu: res.data.data
            });

            if (this.state.actu.length !== 0) {
                this.setState({
                    showLoading: false
                });
            }
        })
    };

    doRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            this.getData();
            event.detail.complete();
        }, 2000);
    }

    onRedirect() {
        this.props.history.push('/addActu');
    }

    // TODO implement notification push
    push() {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register().then();

        // On succcess, we should be able to receive notifications
        PushNotifications.addListener('registration',
            (token: PushNotificationToken) => {
                alert('Push registration success, token: ' + token.value);
            }
        );

        // Some issue with your setup and push will not work
        PushNotifications.addListener('registrationError',
            (error: any) => {
                alert('Error on registration: ' + JSON.stringify(error));
            }
        );

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotification) => {
                let notif = this.state.pushNotification.notifications;
                notif.push({id: notification.id, title: notification.title, body: notification.body});
                this.setState({
                    pushNotification: {
                        notifications: notif
                    }
                })
            }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: PushNotificationActionPerformed) => {
                let notif = this.state.pushNotification.notifications;
                notif.push({
                    id: notification.notification.data.id,
                    title: notification.notification.data.title,
                    body: notification.notification.data.body
                });

                this.setState({
                    pushNotification: {
                        notifications: notif
                    }
                })
            }
        );
    }

    addVote(uri: any, value: any) {
        if (this.state.user && this.state.user.id) {
            Axios.post(uri, {vote: value, user: this.state.user.id}).then(res => {
                if (res.data.status === 'success') {
                    this.setState({
                        alert: {
                            isShow: true,
                            message: 'Misaotra',
                        }
                    })
                } else {
                    this.setState({
                        alert: {
                            isShow: true,
                            message: 'Misy olana ny signaleo',
                        }
                    })
                }

                this.getData();
            });
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage>
                <Header/>
                <IonContent fullscreen>
                    <IonRefresher slot="fixed" onIonRefresh={(e) => this.doRefresh(e)}>
                        <IonRefresherContent/>
                    </IonRefresher>
                    <IonLoading
                        isOpen={this.state.showLoading}
                        message={'Mahandrasa kely azafady ...'}
                    />
                    <IonAlert
                        mode={"ios"}
                        isOpen={this.state.alert.isShow}
                        onDidDismiss={() => this.setState({alert: {isShow: false}})}
                        header={this.state.alert.message}
                        buttons={['OK']}
                    />
                    <IonList>
                        {
                            this.state.actu.map((res: any) => {
                                let marina = 0;
                                let diso = 0;

                                res.vote.map(getVote);

                                function getVote(vote: any) {
                                    if (vote.type === true) {
                                        ++marina;
                                    }
                                    if (vote.type === false) {
                                        ++diso;
                                    }
                                }

                                return (
                                    <IonCard mode={"ios"} key={res.id}>
                                        <IonItem>
                                            <IonAvatar slot="start">
                                                <IonImg alt="image"
                                                        src={(res.photo && true && res.photo !== '') ? res.photo : img}/>
                                            </IonAvatar>
                                            <IonLabel>
                                                <h2>
                                                    <IonCardSubtitle>{res.user ? (res.user.name ? res.user.name.charAt(0).toUpperCase() + res.user.name.slice(1) : 'Signaleo') : 'Signaleo'}</IonCardSubtitle>
                                                </h2>
                                                <IonLabel
                                                    className={"ion-text-wrap"}>{res.message.charAt(0).toUpperCase() + res.message.slice(1)}</IonLabel>
                                            </IonLabel>
                                        </IonItem>
                                        {/*<IonImg alt="image" src={(res.photo && true && res.photo !== '') ? res.photo : img}/>*/}
                                        <IonGrid>
                                            <IonRow>
                                                <IonCol size="6">
                                                    <IonChip color={res.type === "Accident" ? "danger" : "primary"}>
                                                        <IonIcon icon={location} color="primary"/>
                                                        <IonLabel>{res.lieu.charAt(0).toUpperCase() + res.lieu.slice(1)}</IonLabel>
                                                    </IonChip>
                                                </IonCol>
                                                <IonCol size="6">
                                                    <IonChip color={res.type === "Accident" ? "danger" : "primary"}>
                                                        <IonIcon icon={car}
                                                                 color={res.type === "Accident" ? "danger" : "primary"}/>
                                                        <IonLabel
                                                            color={res.type === "Accident" ? "danger" : "primary"}>{res.type}</IonLabel>
                                                    </IonChip>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                        <IonChip color="dark" className={"actualite-date-chip"} mode={"ios"}>
                                            <IonIcon icon={alarmOutline} color="dark"/>
                                            <IonLabel>{res.dateAdd ? (res.dateAdd.split('T')[0].split('-').reverse().join('-') + ' - ' + res.dateAdd.split('T')[1].slice(0, 5)) : 'A confirmer'}</IonLabel>
                                        </IonChip>
                                        <IonSegment
                                            onIonChange={e => this.addVote(HTTP_BASE_URL + '/api/actualite/vote/' + res.id, e.detail.value === 'marina')}>
                                            <IonSegmentButton value="marina">
                                                <IonIcon icon={thumbsUpOutline}/>
                                                <IonLabel>Marina</IonLabel> <IonBadge
                                                color="primary">{marina}</IonBadge>
                                            </IonSegmentButton>
                                            <IonSegmentButton value="diso">
                                                <IonIcon icon={thumbsDownOutline}/>
                                                <IonLabel>Diso</IonLabel> <IonBadge
                                                color="primary">{diso}</IonBadge>
                                            </IonSegmentButton>
                                        </IonSegment>
                                    </IonCard>
                                )
                            })
                        }
                    </IonList>
                    {/*<IonButton expand="full" onClick={() => this.push()}>Register for Push</IonButton>*/}
                    <IonFab vertical="center" onClick={(e) => {
                        e.preventDefault();
                        this.onRedirect()
                    }} horizontal="end" slot="fixed">
                        <IonFabButton>
                            <IonIcon icon={add}/>
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>
        );
    }
}

export default withIonLifeCycle(Actualite);
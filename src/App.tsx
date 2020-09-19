import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonBadge,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { chevronUpCircleOutline } from "ionicons/icons";

/* Theme variables */
import "./theme/variables.css";
import "./theme/style.css";

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Header</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonCard class="ion-padding" color="dark">
        <IonRow>
          <IonCol size="auto">
            <IonImg class="listing-thumbnail" src="https://picsum.photos/200" />
          </IonCol>
          <IonCol>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonRow>
                    <IonCol>
                      <IonBadge color="primary">Sales</IonBadge>
                    </IonCol>
                    <IonCol>
                      <IonIcon icon={chevronUpCircleOutline}></IonIcon>
                    </IonCol>
                  </IonRow>
                </IonCol>
                <IonCol size="auto">
                  <IonItem class="toggle-container" lines="none" color="dark">
                    <IonLabel
                      class="ion-text-uppercase small-label ion-no-margin"
                      color="success"
                    >
                      Activate
                    </IonLabel>
                    <IonToggle
                      class=""
                      color="success"
                      value="activate"
                      checked
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCardTitle>
                  The information contained in this email
                </IonCardTitle>
                <IonCardSubtitle>this is subtitle</IonCardSubtitle>
              </IonRow>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonCard>
    </IonContent>
  </IonApp>
);

export default App;

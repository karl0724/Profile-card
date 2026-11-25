import {Component, computed, signal} from '@angular/core';
import {
    IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonTitle,
    IonToolbar
} from '@ionic/angular';

import type {Student} from '../app/models/student';

const skills = ['JavaScript', 'TypeScript', 'Angular', 'Ionic', 'HTML', 'CSS'];

@Component ({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [
        IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
        IonCardSubtitle, IonCardContent, IonChip, IonButton, IonList, IonListHeader, IonItem,
        IonLabel, IonNote,
    ],
})
export class HomePage {
    // Exercise 1
    me = signal<Student>({
        id: 1,
        name: 'Karl Mckinley',
        section: 'BSIT 3-A',
        skills: [], 
    });

}
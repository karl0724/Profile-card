import {Component, computed, signal} from '@angular/core';
import {
    IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonTitle,
    IonToolbar, IonBadge } from '@ionic/angular';

import type {Student} from '../app/models/student';

const skills = ['JavaScript', 'TypeScript', 'Angular', 'Ionic', 'HTML', 'CSS'];

@Component ({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [IonBadge, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
        IonCardSubtitle, IonCardContent, IonChip, IonButton, IonList, IonListHeader, IonItem,
        IonLabel, IonNote,
    ],
})
export class HomePage {
    me = signal<Student>({
        id: 1,
        name: 'Karl Mckinley',
        section: 'BSIT 3-A',
        skills: [], 
    });

    skillCount = computed(() => this.me().skills.length);
    allAdded = computed(() => this.skillCount() === skills.length);

    addSkill(): void {
        const next = skills.find((s) => !this.me().skills.includes(s));
        if (!next) return;{
            this.me.update((m) => ({...m, skills: [...m.skills, next]}));
        }
    }
}
import {Component, computed, signal} from '@angular/core';
import {
    IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonTitle,
    IonToolbar } from '@ionic/angular';

import type {Student} from '../app/models/student';

const skills = ['JavaScript', 'TypeScript', 'Angular', 'Ionic', 'HTML', 'CSS'];

@Component ({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
        IonCardSubtitle, IonCardContent, IonChip, IonButton, IonList, IonListHeader, IonItem,
        IonLabel, IonNote,
    ],
})
export class HomePage {
    me = signal<Student>({
        id: 1,
        name: 'Karl Mckinley',
        section: 'BSIT 3-A',
        mySkills: [], 
    });

    skillCount = computed(() => this.me().mySkills.length);
    allAdded = computed(() => this.skillCount() >= skills.length);

    addSkill(): void {
        const next = skills.find((s) => !this.me().mySkills.includes(s));
        if (!next) return;{
            this.me.update((m) => ({...m, mySkills: [...m.mySkills, next]}));
        }
    }

    students = signal<Student[]>([
        {id: 1, name: 'Karl', section: 'BSIT-3A', mySkills: ['JavaScript', 'TypeScript', 'Ionic', 'Angular']},
        {id: 2, name: 'Lester Campilla', section: 'BSIT-3B', mySkills: []},
        {id: 3, name: 'John Christian', section: 'BSIT-3A', mySkills: ['Angular', 'HTML', 'CSS']},
        {id: 4, name: 'Adrian Rubio', section: 'BSIT-3A', mySkills: ['JavaScript']},
        {id: 5, name: 'Kenneth Desuyo', section: 'BSIT-3B', mySkills: ['TypeScript', 'HTML', 'CSS']},
    ]);

    selected = signal<Student | null>(null);
    student3A = computed(() => this.students().filter((s) => s.section === 'BSIT-3A').length);
    student3B = computed(() => this.students().filter((s) => s.section === 'BSIT-3B').length);

    select(s: Student): void {
        this.selected.set(s);
    }
}
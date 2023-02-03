import { db } from "./firebaseInit";
import { collection, getDocs, addDoc, deleteDoc, doc, query, where, orderBy } from "firebase/firestore";
import store from '../../store';

export default class firebaseModel {

    constructor() {
        this.taskRef = collection(db, "tasks");
    }

    async fetch () {
        let list = [];
        let q = query(this.taskRef,  orderBy("priority"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((d) => {
            const data = {
                'id' : d.id,
                'day' : this.getDate (d.data().day),
                'text' : d.data().text,
                'priority' : d.data().priority
            }
            list.push(data);
        });

        return list;
    }

    async fetchValue (value) {
        let q = '';
        let list = [];
        if (value) {
            q = query(this.taskRef,  where("priority", "==", value));
        } else {
            q = query(this.taskRef,  orderBy("priority"));
        }
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((d) => {
            const data = {
                'id' : d.id,
                'day' : this.getDate (d.data().day),
                'text' : d.data().text,
                'priority' : d.data().priority
            }
            list.push(data);
        });

        return list;
    }
    async sortToggle (sort) {
      
        let q = '';
        let list = [];
        q = query(this.taskRef,  orderBy("priority", sort));
        
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((d) => {
            const data = {
                'id' : d.id,
                'day' : this.getDate (d.data().day),
                'text' : d.data().text,
                'priority' : d.data().priority
            }
            list.push(data);
        });

        return list;
    }

    getDate (d) { 
        var a = new Date(d.split('-'));
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getUTCFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][a.getDay()]
        return weekday + ', ' + date + ' ' + month + ', ' + year;
    }
    
    async add (data) {
        await addDoc(this.taskRef, {
            id: Math.floor(Math.random()*100000),
            day: data.day,
            priority: data.priority,
            text: data.text           
        });
    }
    
    async delete (id) {
        await deleteDoc(doc(db, "tasks", id));
    }

}
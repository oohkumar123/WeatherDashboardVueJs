import { db } from "./firebaseInit";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export default class firebaseModel {

    constructor() {
        this.taskRef = collection(db, "tasks");
    }

    async fetch () {
        let list = [];
        const querySnapshot = await getDocs(this.taskRef);

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
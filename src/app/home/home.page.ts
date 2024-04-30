import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  nivelLuz: number = 0;
  dayOrNight: boolean = true; 

  constructor(private database: Database) {}

  ngOnInit(){
    //this.firebase()  
  }
/*
  firebase() {
    const luzRoute = ref(this.database, "/sensor/ldr")

    object(luzRoute).subscribe(async value => {
      this.nivelLuz = value.snapshot.val()
      await this.dayOrNightDetection()
    });
  }

  async dayOrNightDetection() {
    if (this.nivelLuz >= 50 && !this.dayOrNight) {
      this.dayOrNight = true
      await this.sendDayNotification()
    } else if (this.nivelLuz < 50 && this.dayOrNight) {
      this.dayOrNight = false
      await this.sendNightNotification()
    }
  }

  async sendDayNotification() {
    await LocalNotifications.requestPermissions();

    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Es de dìa ☀️",
          body: "No olvides protegerte del Sol ¡¡¡Esta que quema!!!",
          id: 1
        }
      ]
    });
  }

  async sendNightNotification() {
    await LocalNotifications.requestPermissions();

    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Es de noche 🌘",
          body: "No olvides mirar al cielo ¡¡¡La Luna y las Estrellas estan hermosas!!!",
          id: 1
        }
      ]
    });
  }
*/
}

import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor( private storage: Storage,
               public toastController: ToastController ) { 
    this.storage.create();
    this.cargarFavoritos();
  }

  async cargarFavoritos() {

    const favoritos = await this.storage.get('favoritos');

    if( favoritos ) {
      
      this.noticias = favoritos;

    }
      
  }

  async presentToast( message: string ) {

    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();

  }

  guardarNoticia( noticia: Article ) {
    
    const existe = this.noticias.find( noti => noti.title === noticia.title );

    if( !existe ){ 

      this.noticias.unshift( noticia );
      this.storage.set( 'favoritos', this.noticias );

    }

    this.presentToast( 'Agregado a favorito');
  }

  borrarNoticia( noticia: Article ) {

    this.noticias = this.noticias.filter( noti => noti.title !== noticia.title );
    this.storage.set('favoritos', this.noticias );
    this.presentToast( 'Borrado de favorito');
    
  }

  
}

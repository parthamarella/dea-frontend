import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  validations_form: FormGroup;
  image: any;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields(){
    this.image = "./assets/imgs/default_image.jpg";
    this.validations_form = this.formBuilder.group({
      state: "ap",
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      seedCost1: new FormControl('', Validators.required), 
      manureCost1: new FormControl('', Validators.required), 
      irrigationCost1:  new FormControl('', Validators.required),
      familyCost1: new FormControl('', Validators.required),
      machineCost1: new FormControl('', Validators.required),
      seedCost2: new FormControl('', Validators.required), 
      manureCost2: new FormControl('', Validators.required), 
      irrigationCost2:  new FormControl('', Validators.required),
      familyCost2: new FormControl('', Validators.required),
      machineCost2: new FormControl('', Validators.required),
      seedCost3: new FormControl('', Validators.required), 
      manureCost3: new FormControl('', Validators.required), 
      irrigationCost3:  new FormControl('', Validators.required),
      familyCost3: new FormControl('', Validators.required),
      machineCost3: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    let data = {
      state: 'ap',
      name: value.name,
      phone: value.phone,
      seedCost1: value.seedCost1,
      manureCost1: value.manureCost1,
      irrigationCost1: value.irrigationCost1,
      familyCost1: value.familyCost1,
      machineCost1: value.machineCost1,
      seedCost2: value.seedCost2,
      manureCost2: value.manureCost2,
      irrigationCost2: value.irrigationCost2,
      familyCost2: value.familyCost2,
      machineCost2: value.machineCost2,
      seedCost3: value.seedCost3,
      manureCost3: value.manureCost3,
      irrigationCost3: value.irrigationCost3,
      familyCost3: value.familyCost3,
      machineCost3: value.machineCost3,
    } 
    this.firebaseService.createTask(data)
    .then(
      res => {
        this.router.navigate(["/home"]);
      }
    )
  }

  openImagePicker(){
    this.imagePicker.hasReadPermission()
    .then((result) => {
      if(result == false){
        // no callbacks required as this opens a popup which returns async
        this.imagePicker.requestReadPermission();
      }
      else if(result == true){
        this.imagePicker.getPictures({
          maximumImagesCount: 1
        }).then(
          (results) => {
            for (var i = 0; i < results.length; i++) {
              this.uploadImageToFirebase(results[i]);
            }
          }, (err) => console.log(err)
        );
      }
    }, (err) => {
      console.log(err);
    });
  }

  async uploadImageToFirebase(image){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    const toast = await this.toastCtrl.create({
      message: 'Image was updated successfully',
      duration: 3000
    });
    this.presentLoading(loading);
    let image_src = this.webview.convertFileSrc(image);
    let randomId = Math.random().toString(36).substr(2, 5);

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image_src, randomId)
    .then(photoURL => {
      this.image = photoURL;
      loading.dismiss();
      toast.present();
    }, err =>{
      console.log(err);
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}

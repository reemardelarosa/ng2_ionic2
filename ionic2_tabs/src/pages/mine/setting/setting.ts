import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Utils } from '../../../providers/Utils';
import { ChangePasswordPage } from '../change-password/change-password';
import { NativeService } from '../../../providers/NativeService';
import { GlobalData } from '../../../providers/GlobalData';

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  enabledFileCache = true; // app是否开启缓存

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              public nativeService: NativeService,
              public globalData: GlobalData,
              private modalCtrl: ModalController) {
    this.enabledFileCache = this.globalData.enabledFileCache;
  }

  clearCache() {
    Utils.sessionStorageClear(); // 清除数据缓存
    this.nativeService.showToast('缓存清除成功');
    this.navCtrl.pop();
  }

  cacheChange() {
    this.globalData.enabledFileCache = this.enabledFileCache;
    this.storage.set('enabled-file-cache-' + this.globalData.userId, this.enabledFileCache);
  }

  changePassword() {
    const modal = this.modalCtrl.create(ChangePasswordPage);
    modal.present();
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { TransaksiService } from '../service/transaksi.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { Transaksi } from '../model/transaksi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user: User;
  users: Observable<Transaksi>;

  constructor(private transaksiService:TransaksiService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.transaksiService.login(this.user.userName).subscribe(result =>{
      // this.addTransaksiLanjutDialogRef.close();
      this.redirectToHomePage();
    });
  }

  redirectToHomePage(){
    this.router.navigate(['/dashboard']);
  }

}

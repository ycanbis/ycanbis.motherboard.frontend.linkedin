import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {
  linkedInToken:string = ''; 
  code:string='';
  constructor(private route: ActivatedRoute,  private _router: Router) {

   }
  ngOnInit(): void {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
    
    axios.get(`http://localhost:8080/login?token=${this.linkedInToken}`).then(res => {
      localStorage.setItem('token', res.data);
    axios.get(`http://localhost:8080/getProfile?accessToken=${res.data}`).then((res)=>{
      console.log(res)
      localStorage.setItem('User', JSON.stringify(res.data));
      this._router.navigate(['/motherboard']);
    })
    }).catch((err)=>{
      console.log(err)
    });
}

}

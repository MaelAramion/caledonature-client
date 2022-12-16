import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  form = new FormGroup({
    'email': new FormControl(''),
    'mdp': new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit(){
    let infos = this.form.value;
    // @ts-ignore
    this.authService.login(infos.email, infos.mdp).then(()=>{
      console.log("Connexion réussie");
      this.router.navigate(['/accueil']);
    }).catch(error => {
      console.log(error);
    });
  }

}

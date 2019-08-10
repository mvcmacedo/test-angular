import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../shared/user/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    ) { }

  ngOnInit() {
  }

  list() {
    this.router.navigate(['/user-list']);
  }

  save(form: NgForm) {
    this.userService.save(form).subscribe(response => {
      this.list();
    }, err => console.log(err));
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }
}

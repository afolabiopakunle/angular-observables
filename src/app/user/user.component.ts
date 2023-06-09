import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id = ''
  constructor(private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

}
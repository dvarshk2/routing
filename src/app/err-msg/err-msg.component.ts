import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-err-msg',
  templateUrl: './err-msg.component.html',
  styleUrls: ['./err-msg.component.scss']
})
export class ErrMsgComponent implements OnInit {
  errMsg! : string;
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    // this.errMsg = this.route.snapshot.data['msg']

    this.route.data
                  .subscribe((data : Data) => {
                    this.errMsg = data['msg']
                  })
  }

}

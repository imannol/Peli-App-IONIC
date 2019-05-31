import { Component, OnInit } from '@angular/core';
import { PeliService } from '../../services/peli.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.page.html',
  styleUrls: ['./peli-details.page.scss'],
})
export class PeliDetailsPage implements OnInit {

  content: object = null;

  constructor(private PeliService: PeliService, private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
  
   let id = this.activatedRoute.snapshot.paramMap.get('id'); 
   this.PeliService.getDetails(id).subscribe(result => this.content = result);
}
}

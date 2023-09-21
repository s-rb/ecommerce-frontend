import {Component, OnInit} from '@angular/core';
import {OrderHistory} from "../../common/order-history";
import {OrderHistoryService} from "../../services/order-history.service";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  constructor(private orderHistoryService: OrderHistoryService) {}

  handleOrderHistory(): void {
    // read the user's email addressfrom browser storage
    const email = JSON.parse(this.storage.getItem('userEmail')!);

    // retrieve data from the service
    this.orderHistoryService.getOrderHistory(email).subscribe(
      data => {
        this.orderHistoryList = data._embedded.orders;
      }
    );
  }

}

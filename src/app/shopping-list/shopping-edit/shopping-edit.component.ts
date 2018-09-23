import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListservices } from '../shopping-list.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private ShoppingService: ShoppingListservices, private toastr: ToastrService) { }

  ngOnInit() {
  }
  onAddItem(nameInput: string, amountInput: number) {
    const newing = new Ingredient(nameInput, amountInput);
    if (newing.name != "" && newing.amount != 0) {
      this.ShoppingService.addIngredient(newing);
      const options = { closeButton: true, actionButton: 'Action', tapToDismiss: false, titleClass: 'yellow' };
      this.toastr.success('', 'Ingredient Successfully Added ', options);
    }
    else {
      const options = { closeButton: true, actionButton: 'Action', tapToDismiss: false, titleClass: 'yellow' };
      this.toastr.error('', 'Please fill name and amount field', options);
    }
  }
}

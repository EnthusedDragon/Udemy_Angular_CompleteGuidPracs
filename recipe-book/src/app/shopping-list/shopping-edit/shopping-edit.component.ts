import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  isEditing = false;
  editItemIndex: number;
  editItem: Ingredient;
  @ViewChild('f', {static: false}) slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index:number)=>{
        this.isEditing = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(form:NgForm)
  {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if(this.isEditing)
    {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    }
    else
    {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.isEditing = false;
    form.reset();
  }

  onClear()
  {
    this.isEditing = false;
    this.slForm.reset();
  }

  onDelete()
  {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashService } from './flash.service';

@Component({
  selector: 'angular-projects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('flashForm', { static: false }) flashForm: NgForm;
  editing = false;
  editingId: any;
  flash = {
    question: '',
    answer: ''
  };
  flashs$: any;
  flashs: any;
  constructor(private flashService: FlashService) {
    this.flashs$ = this.flashService.flashs$;
  }

  trackByFlashId(index: any, flash: { id: any; }) {
    return flash.id;
  }

  handleSubmit(): void {
    this.flashService.addFlash(this.flash);
    this.handleClear();
  }

  handleClear() {
    this.flash = {
      question: '',
      answer: ''
    };
    this.flashForm.reset();
  }

  handleToggleCard(id: any) {
    this.flashService.toggleFlash(id);
  }

  handleDelete(id: any) {
    this.flashService.deleteFlash(id);
  }

  handleEdit(id: any) {
    this.flash = this.flashService.getFlash(id);
    this.editing = true;
    this.editingId = id;
  }

  handleUpdate() {
    this.flashService.updateFlash(this.editingId, this.flash);
    this.handleCancel();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

  handleRememberedChange({ id, flag }) {
    this.flashService.rememberedChange(id, flag);
  }
}

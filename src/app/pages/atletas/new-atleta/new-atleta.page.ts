import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-new-atleta',
  templateUrl: './new-atleta.page.html',
  styleUrls: ['./new-atleta.page.scss'],
})
export class NewAtletaPage implements OnInit {
  atletaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private athleteService: AtletaService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    // Inicializando o formulário com a estrutura necessária
    this.atletaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      telefone: [''],
      endereco: this.fb.group({
        CEP: [''],
        logradouro: [''],
        numeroLote: [''],
        complemento: [''],
        localidade: [''],
        UF: [''],
      }),
      questionario: this.fb.group({
        rendaFamiliar: [''],
        pessoasEmCasa: [0, [Validators.min(0)]],
        condicoesMoradia: [''],
        cadastroNIS: [false],
      }),
    });
  }

  cadastrarAtleta(): void {
    console.log(this.atletaForm.value);
    if (this.atletaForm.valid) {
      this.athleteService.create(this.atletaForm.value).subscribe({
        next: () => {
          alert('Atleta cadastrado com sucesso!');
          this.fecharModal();
        },
        error: (err) => console.error('Erro ao cadastrar atleta:', err),
      });
    } else {
      alert('Preencha todos os campos obrigatórios corretamente!');
    }
  }

  fecharModal(): void {
    this.modalController.dismiss();
  }
}

# Pomodoro-Clock!

<img src="https://user-images.githubusercontent.com/94024958/141039040-8227764a-6a3a-4cb7-9b2a-3d765d4582a0.png" align="center" >

## 🚀 O projeto

<p>
  O objetivo deste projeto é construir um relógio pomodoro. Onde o usuário vai selecionar a quantidade de minutos e segundos através de setas posicionadas na parte superior e inferior do relógio.

Abaixo do relógio, vai ser instalado tres botões. O primeiro botão vai ser o reset, e vai ser responsável por reiniciar a contagem. O segundo botão vai ser o start, vai ser responsável por iniciar a contagem. O terceiro botão vai ser play/pause.
  </p>

## 📫 Contribuindo para Pomodoro-Clock
1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 📝 Documentário das funções

### Version 1.0
<p> upMinutes:
- Converte o valor existente na div que recebe os minutos para um número inteiro;
- Acrescenta 15 unidades aos minutos;

upSeconds:
- Converte o valor existente na div que recebe os segundos para um número inteiro;
- Acrescenta 15 unidades aos segundos;

downMinutes:
- Converte o valor existente na div que recebe os minutos para um número inteiro;
- Diminui 15 unidades dos minutos;

downSeconds:
- Converte o valor existente na div que recebe os segundos para um número inteiro;
- Diminui 15 unidades dos segundos;

start:
- Inicia o setInterval que vai realizando modificações na div que recebe os tempos a cada 1 segundo;
  
#Version 2.0
play:
- Recebeu a function start. Mantendo as funcionalidades

pause:
- Pausa a contagem do nosso relógio

reset:
- Pausa a contagem e reinicia o relógio, permitindo alterar os valores exibidos.

stop:
- Pausa a contagem e reinicia o relógio. 
- É identica a function reset, porém, decidi criar uma nova apenas para manter a organização </p>

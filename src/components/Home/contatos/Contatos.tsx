import { FormEvent } from 'react';
import emailjs from 'emailjs-com';

function Contatos() {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_tn39j3m', 'template_7vfpq8o', e.target as HTMLFormElement, '0EuCxHoyp382BsQrD')
      .then((result) => {
          console.log(result.text);
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          console.log(error.text);
          alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
      });

    e.currentTarget.reset();  // Reseta o formulário após o envio
  };

  return (
    <div id="contatos" className="flex items-center pb-10 bg-black xl:h-screen sm:pb-20 md:pb-10 xl:pb-0">
      <div className="w-full md:max-w-2xl lg:max-w-3xl md:mx-auto">
        <div className="space-y-4">
          <h1 className="flex justify-center text-2xl font-bold text-primary-200 font-encode sm:text-3xl pt-7">Fale Comigo</h1>
          <p className="w-4/5 pb-5 mx-auto text-sm text-center text-white lg:w-full lg:mx-0 font-encode sm:flex sm:justify-center">Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</p>
        </div>

        <form onSubmit={sendEmail} className="w-5/6 mx-auto space-y-5 md:w-full md:mx-0 md:grid md:grid-cols-5 md:gap-x-5 md:gap-y-6 md:mt-8 md:space-y-0">
          <div className="space-y-2 md:col-span-3">
            <label htmlFor="nome" className="block text-sm text-white font-encode">Nome(*)</label>
            <input type="text" id="nome" name="nome" required className="block w-full p-2 mt-1 text-black bg-white border-gray-300 shadow-sm sm:text-base rounded-2xl focus:ring-primary-500 focus:border-primary-500 placeholder:text-primary-300" placeholder="Digite aqui"/>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="email" className="block text-sm text-white font-encode">Email(*)</label>
            <input type="email" id="email" name="email" required className="block w-full p-2 mt-1 text-black bg-white border-gray-300 shadow-sm sm:text-base rounded-2xl focus:ring-primary-500 focus:border-primary-500 placeholder:text-primary-300" placeholder="email@exemplo.com.br"/>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="telefone" className="block text-sm text-white font-encode">Telefone</label>
            <input type="tel" id="telefone" name="telefone" pattern="[0-9]{11}" className="block w-full p-2 mt-1 text-black bg-white border-gray-300 shadow-sm sm:text-base rounded-2xl focus:ring-primary-500 focus:border-primary-500 placeholder:text-primary-300" placeholder="Exemplo: 11 88888-8888" />
          </div>

          <div className="space-y-2 md:col-span-3">
            <label htmlFor="assunto" className="block text-sm text-white font-encode">Assunto(*)</label>
            <input type="text" id="assunto" name="assunto" required className="block w-full p-2 mt-1 text-black bg-white border-gray-300 shadow-sm sm:text-base rounded-2xl focus:ring-primary-500 focus:border-primary-500 placeholder:text-primary-300" placeholder="Digite aqui" />
          </div>

          <div className="col-span-5 space-y-2">
            <label htmlFor="mensagem" className="block text-sm text-white font-encode">Mensagem(*)</label>
            <textarea id="mensagem" name="mensagem" rows={3} required className="block w-full h-40 p-2 mt-1 overflow-auto text-black bg-white border-gray-300 shadow-sm sm:text-base max-h-40 rounded-2xl focus:ring-primary-500 focus:border-primary-500 placeholder:text-primary-300" placeholder="Escreva sua mensagem aqui"></textarea>
          </div>

          <div className="flex items-center justify-center col-span-5 pt-2 md:pt-5">
            <button type="submit" className="w-[180px] sm:w-[210px] md:w-[300px] mt-1 py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-encode text-white font-bold bg-primary-200 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">Enviar Mensagem</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contatos;

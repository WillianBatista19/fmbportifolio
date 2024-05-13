function Contatos() {
  return (
    <div id="contatos" className="xl:h-screen bg-black flex items-center pb-10 sm:pb-20 md:pb-10 xl:pb-0">

      <div className="md:max-w-2xl lg:max-w-3xl md:mx-auto w-full">

        <div className="space-y-4">
          <h1 className="text-primary-200 font-akkordeonSlab font-bold text-3xl sm:text-4xl flex justify-center pt-7">Fale Comigo</h1>
          <p className="w-4/5 lg:w-full mx-auto lg:mx-0 pb-5 text-white font-akkordeonSlab text-base md:text-xl text-center sm:flex sm:justify-center">Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</p>
        </div>

        <form className="w-5/6 md:w-full mx-auto md:mx-0 md:grid md:grid-cols-5 md:gap-x-5 md:gap-y-6 md:mt-8 space-y-5 md:space-y-0">
          <div className="md:col-span-3 space-y-2">
            <label htmlFor="nome" className="block text-white font-akkordeonSlab text-lg">Nome(*)</label>
            <input type="text" id="nome" name="nome" required className="mt-1 p-2 block w-full border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-black bg-white placeholder:text-primary-300 text-base" placeholder="Digite aqui"/>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label htmlFor="email" className="block text-white font-akkordeonSlab text-lg">Email(*)</label>
            <input type="email" id="email" name="email" required className="mt-1 p-2 block w-full border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-black bg-white placeholder:text-primary-300 text-base" placeholder="email@exemplo.com.br"/>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label htmlFor="telefone" className="block text-white font-akkordeonSlab text-lg">Telefone</label>
            <input type="tel" id="telefone" name="telefone" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" className="mt-1 p-2 block w-full border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-black bg-white placeholder:text-primary-300 text-base" placeholder="Exemplo: 11 88888-8888" />
          </div>

          <div className="md:col-span-3 space-y-2">
            <label htmlFor="assunto" className="block text-white font-akkordeonSlab text-lg">Assunto(*)</label>
            <input type="text" id="assunto" name="assunto" required className="mt-1 p-2 block w-full border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-black bg-white placeholder:text-primary-300 text-base" placeholder="Digite aqui" />
          </div>

          <div className="col-span-5 space-y-2">
            <label htmlFor="mensagem" className="block text-white font-akkordeonSlab text-lg">Mensagem(*)</label>
            <textarea id="mensagem" name="mensagem" rows={3} required className="mt-1 p-2 block w-full h-40 max-h-40 border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-black bg-white placeholder:text-primary-300 overflow-auto text-base" placeholder="Escreva sua mensagem aqui"></textarea>
          </div>

          <div className="col-span-5 flex justify-center items-center pt-2 md:pt-5">
            <button type="submit" className="w-[180px] sm:w-[210px] md:w-[300px] mt-1 py-3 px-4 border border-transparent rounded-full shadow-sm text-base md:text-xl font-akkordeonSlab text-white font-bold bg-primary-200 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">Enviar Mensagem </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contatos;

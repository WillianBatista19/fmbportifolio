function Contatos() {
  return (
    <div className="h-screen bg-black">
      <div className="space-y-4">
        <h1 className="text-primary-200 font-akkordeonSlab font-bold text-4xl flex justify-center pt-7">Fale Comigo</h1>
        <p className="text-white font-akkordeonSlab text-xl flex justify-center">Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</p>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <form className="grid grid-cols-5 gap-x-5 gap-y-6">
          <div className="col-span-3 space-y-2">
            <label htmlFor="nome" className="block text-white font-akkordeonSlab text-lg">Nome(*)</label>
            <input type="text" id="nome" name="nome" className="mt-1 p-2 block w-full border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-white bg-white" />
          </div>

          <div className="col-span-2 space-y-2">
            <label htmlFor="email" className="block text-white font-akkordeonSlab text-lg">Email(*)</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-white bg-white" />
          </div>

          <div className="col-span-2 space-y-2">
            <label htmlFor="telefone" className="block text-white font-akkordeonSlab text-lg">Telefone</label>
            <input type="tel" id="telefone" name="telefone" className="mt-1 p-2 block w-full border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-white bg-white" />
          </div>

          <div className="col-span-3 space-y-2">
            <label htmlFor="assunto" className="block text-white font-akkordeonSlab text-lg">Assunto(*)</label>
            <input type="text" id="assunto" name="assunto" className="mt-1 p-2 block w-full border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-white bg-white" />
          </div>

          <div className="col-span-5 space-y-2">
            <label htmlFor="mensagem" className="block text-white font-akkordeonSlab text-lg">Mensagem(*)</label>
            <textarea id="mensagem" name="mensagem" rows={3} className="mt-1 p-2 block w-full max-h-40 resize-none border-gray-300 rounded-2xl shadow-sm focus:ring-primary-500 focus:border-primary-500 text-white bg-white overflow-auto"></textarea>
          </div>

          <div className="col-span-5 flex justify-center items-center">
            <button type="submit" className="w-[300px] py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-akkordeonSlab text-white font-bold bg-primary-200 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">Enviar Mensagem </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contatos;

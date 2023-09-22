import Image from 'next/image'

export default function Home() {
  const objetos = [
    {nome:"Henrique" ,idade:18 ,altura: 1.75},
    {nome:"Guilherme", idade:19, altura: 1.70},
    {nome:"Julian", idade:30, altura: 1.20},
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1>
      <ul>
        {objetos.map((objeto) => (
          <li key={objeto.nome}>{objeto.nome} - {objeto.idade}</li>
        ))}
      </ul>
        
    </main>
  )
}

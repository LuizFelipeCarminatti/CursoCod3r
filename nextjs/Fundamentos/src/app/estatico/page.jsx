"use client"

let aleatorio = Math.floor(Math.random() * 100) + 1

export default async function MinhaPage() {

    return (
        <div>
            <h1>Número Estático: {aleatorio}</h1>
        </div>
    );
}

function Home() {

  return (
    <main className="flex flex-col">
        <h1>Exemples</h1>
        <h2>Components</h2>
        <div className="field w-1/2">
            <label htmlFor="example">Input example</label>
            <input id="example" type="text" />
        </div>
        <button className="btn-primary w-fit">Button</button>
        <h2>Colors</h2>
        <div className="flex gap-4">
            <div className="p-4 rounded-2xl bg-dark text-light">Dark</div>
            <div className="p-4 rounded-2xl bg-primary text-light">Primary</div>
            <div className="p-4 rounded-2xl bg-secondary text-light">Secondary</div>
            <div className="p-4 rounded-2xl bg-tertiary text-light">Tertiary</div>
            <div className="p-4 rounded-2xl bg-light text-dark border">Light</div>
        </div>
    </main>
  )
}
export default Home
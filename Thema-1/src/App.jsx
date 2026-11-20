import './App.scss'

function App() {
  return (
    <div className="container mt-4">
      <div className="row mt-2">
        <div className="col-md-6 mb-3">
          <div className="bg-primary text-white text-center p-2 rounded">
            Secondary color is #9b59b6
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="bg-secondary text-white text-center p-2 rounded">
            Secondary color is #13dcb4ff
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
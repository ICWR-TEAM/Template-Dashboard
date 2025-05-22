function Home() {
    return (
      <>
        <h2>Welcome to incrustwerush.org Dashboard</h2>
          <p>This is a incrustwerush.org Dashboard</p>
  
          <div className="row">
              <div className="col-md-4">
                  <div className="card m-3 bg-black text-white">
                      <div className="card-body">
                          <h5>Total Users</h5>
                          <div>
                            <i className="fas fa-user"></i> 1,234
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card m-3 bg-black text-white">
                      <div className="card-body">
                          <h5>Tools</h5>
                          <div>
                            <i className="fas fa-toolbox"></i> 1,234
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card m-3 bg-black text-white">
                      <div className="card-body">
                          <h5>Orders</h5>
                          <div>
                            <i className="fas fa-money-bill"></i> 1,234
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
  }
  
  export default Home;
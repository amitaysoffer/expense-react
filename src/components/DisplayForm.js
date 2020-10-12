import React from 'react'

function DisplayForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group row">
        <label htmlFor="date" className="col-lg-1 col-form-label">Date</label>
        <div className="col-lg-5">
          <input required className="form-control" value={props.data.date} onChange={props.handleChange} name="date" id="date" type="date"></input>
        </div>
        <label htmlFor="category" className="col-lg-1 col-form-label">Category</label>
        <div className="col-lg-5">
          <select required id="category" className="form-control" value={props.data.category} onChange={props.handleChange} name="category">
            <option value="">-- Choose category --</option>
            <option value="professional">Professional</option>
            <option value="travel">Travel</option>
            <option value="family">Family</option>
            <option value="bills">Bills</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="amount" className="col-lg-1 col-form-label">Amount</label>
        <div className="col-lg-5">
          <input required className="form-control" id="amount" type="number" value={props.data.amount} name="amount" onChange={props.handleChange}></input>
        </div>
        <label htmlFor="currency" className="col-lg-1 col-form-label">Currency</label>
        <div className="col-lg-5">
          <select required className="form-control" id="currency" value={props.data.currency} name="currency" onChange={props.handleChange}>
            <option value="">-- Choose currency --</option>
            <option value="$">Dollar</option>
            <option value="£">Pound</option>
            <option value="¢">Euro</option>
            <option value="?">Other</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-lg-12">
          <textarea required id="description" placeholder="Expense details" className="form-control" rows="3" value={props.data.description} onChange={props.handleChange} name="description"></textarea>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <button type="submit" className="col-lg-3 btn btn-primary">Submit Expense</button>
        </div>
      </div>
    </form>
  )
}

export default DisplayForm 
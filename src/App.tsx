import React from 'react'
import Balance, {
	ICurrency,
	ITypeOperation,
} from './components/Balance/Balance'

function App() {
	return (
		<div className='App'>
			<Balance
				amount={100}
				currency={ICurrency.RUB}
				update={new Date()}
				type={ITypeOperation.r}
			/>
		</div>
	)
}

export default App

import React, { FC } from 'react'
import styles from './Balance.module.css'

export enum ICurrency {
	RUB = 'RUB',
	USD = 'USD',
}

export enum ITypeOperation {
	r = 'replenishment', //пополнение
	wo = 'write-off', //списание
	t = 'translation', //перевод
}

interface IBalance extends React.PropsWithChildren {
	amount: number
	currency: ICurrency
	update: Date
	type: ITypeOperation
}

const Balance: FC<IBalance> = ({ amount, currency, update, type }) => {
	const formattedDate = update.toLocaleDateString()

	return (
		<div className={styles.container}>
			<div className={styles.amount}>
				{amount}
				<span className={styles.currency}>{currency}</span>
				<div className={styles['update-date']}>
					Дата обновления: <span>{formattedDate}</span>
				</div>
			</div>
		</div>
	)
}

export default Balance

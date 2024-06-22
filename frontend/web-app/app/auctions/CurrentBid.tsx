type Props = {
    amount: number
    reservePrice: number
}

export default function CurrentBid({ amount, reservePrice }: Props) {
    const text = amount ? '€' + amount : 'Geen bod nog'
    const color = amount ? amount > reservePrice ? 'bg-green-600' : 'bg-amber-600' : 'bg-red-600'
    return (
        <div className={`
            border-2 border-white py-1 px-2 rounded-lg flex
            justify-center ${color}`}>
            {text}
        </div>
    )
} 
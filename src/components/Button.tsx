import { FC } from 'react'
import { Colors } from '@/constants/colors'

interface BtnProps {
  label: string
}

export const PrimaryBtn: FC<BtnProps> = ({ label }) => {
  return (
    <div className='button primaryBtn'>
      <div className='btnText'>{label}</div>
    </div>
  )
}

export const GhostBtn: FC<BtnProps> = ({ label }) => {
  return (
    <div className='button ghostBtn'>
      <div className='btnText'>{label}</div>
    </div>
  )
}

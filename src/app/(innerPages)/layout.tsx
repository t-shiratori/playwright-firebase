'use client'

import { AuthWrapper } from '@/components/AuthWrapper'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	return <AuthWrapper>{children}</AuthWrapper>
}

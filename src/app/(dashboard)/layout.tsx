import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            wolfpackdefence
                        </Link>
                        <div className="flex items-center space-x-4">
                            <Button variant="outline" asChild>
                                <Link href="/browse">Browse</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/list-item">
                                    <Plus className="h-4 w-4 mr-2" />
                                    List Item
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {children}


        </div>
    )
}

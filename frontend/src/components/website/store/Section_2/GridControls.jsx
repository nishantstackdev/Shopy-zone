'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { FiGrid, FiList } from 'react-icons/fi'
import { TfiLayoutGrid2, TfiLayoutGrid3, TfiLayoutGrid4 } from 'react-icons/tfi'

export default function GridControls() {
    const router = useRouter()
    const searchParams = useSearchParams()
    
    // Default layout view to 4 columns if not set
    const currentView = searchParams.get('view') || '4'

    function setView(cols) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('view', cols)
        router.push(`/products?${params.toString()}`, { scroll: false })
    }

    const controlButtons = [
        { cols: '1', icon: <FiList size={16} />, label: 'List' },
        { cols: '2', icon: <TfiLayoutGrid2 size={15} />, label: '2 Columns' },
        { cols: '3', icon: <TfiLayoutGrid3 size={15} />, label: '3 Columns' },
        { cols: '4', icon: <TfiLayoutGrid4 size={15} />, label: '4 Columns' },
    ]

    return (
        <div className="flex items-center justify-between bg-white border border-slate-100 p-3 rounded-2xl mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <span className="text-xs font-black text-slate-400 tracking-wider uppercase pl-1">
                View Layout
            </span>
            
            <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-100/80">
                {controlButtons.map((btn) => {
                    const isActive = currentView === btn.cols
                    return (
                        <button
                            key={btn.cols}
                            onClick={() => setView(btn.cols)}
                            title={btn.label}
                            className={`p-2 rounded-lg transition-all duration-200 ${
                                isActive
                                    ? 'bg-slate-900 text-white shadow-sm'
                                    : 'text-slate-400 hover:text-slate-800 hover:bg-white'
                            }`}
                        >
                            {btn.icon}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
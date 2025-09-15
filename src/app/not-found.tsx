import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        <div className="text-6xl font-mono">404</div>
        
        <div className="space-y-4">
          <h1 className="text-sm font-mono">PAGE NOT FOUND</h1>
          <p className="text-xs font-mono text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>

        <div className="space-y-2">
          <Link href="/" className="text-xs font-mono minimal-hover p-2 -m-2 block">
            GO HOME
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="text-xs font-mono minimal-hover p-2 -m-2"
          >
            GO BACK
          </button>
        </div>
      </div>
    </div>
  )
}
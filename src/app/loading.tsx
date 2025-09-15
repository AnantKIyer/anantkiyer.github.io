export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="text-sm font-mono mb-2">LOADING</div>
        <div className="text-xs font-mono text-muted-foreground">
          {Array.from({ length: 10 }, () => '-').join('')}
        </div>
      </div>
    </div>
  )
}
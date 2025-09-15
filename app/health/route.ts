export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'nickpage-tech',
    version: process.env.npm_package_version || '1.0.0'
  })
}
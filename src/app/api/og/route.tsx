import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const title = searchParams.get('title') || 'Boilr';
        const description = searchParams.get('description') || 'Generador de Boilerplates Profesionales';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#09090b',
                        backgroundImage: 'radial-gradient(circle at 50% 50%, #1e1b4b 0%, #09090b 100%)',
                        padding: '40px 80px',
                    }}
                >
                    {/* Decorative Elements */}
                    <div
                        style={{
                            position: 'absolute',
                            top: -100,
                            right: -100,
                            width: 400,
                            height: 400,
                            borderRadius: '50%',
                            background: 'rgba(99, 102, 241, 0.1)',
                            filter: 'blur(100px)',
                        }}
                    />

                    {/* Logo Section */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '40px',
                        }}
                    >
                        <div
                            style={{
                                width: '60px',
                                height: '60px',
                                background: '#6366f1',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transform: 'rotate(-5deg)',
                                boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
                            }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>
                        <span
                            style={{
                                fontSize: '48px',
                                fontWeight: '900',
                                color: 'white',
                                letterSpacing: '-0.05em',
                                textTransform: 'uppercase',
                            }}
                        >
                            BOILR
                        </span>
                    </div>

                    {/* Content Section */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '72px',
                                fontWeight: '900',
                                color: 'white',
                                marginBottom: '24px',
                                letterSpacing: '-0.02em',
                                lineHeight: '1.1',
                            }}
                        >
                            {title}
                        </h1>
                        <p
                            style={{
                                fontSize: '32px',
                                color: 'rgba(255, 255, 255, 0.6)',
                                maxWidth: '800px',
                                lineHeight: '1.5',
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Footer Info */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 60,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 24px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '100px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: 'bold' }}>boilr.ribla.mx</span>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (error: unknown) {
        console.error('OG Image generation error:', error);
        return new Response('Failed to generate image', { status: 500 });
    }
}

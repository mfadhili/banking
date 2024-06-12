export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    return (
        <body>
            <main>
                SIDEBAR
                {children}
            </main>
        </body>
    );
}
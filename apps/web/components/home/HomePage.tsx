import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/logout">
                <Button variant="default">Click me</Button>
            </Link>
        </div>
    )
}
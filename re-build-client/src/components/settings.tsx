import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Settings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your application settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8">
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">SMTP Settings</h3>
            <div className="grid gap-2">
              <Label htmlFor="smtp-host">SMTP Host</Label>
              <Input id="smtp-host" defaultValue="smtp.example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smtp-port">SMTP Port</Label>
              <Input id="smtp-port" defaultValue="587" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smtp-username">SMTP Username</Label>
              <Input id="smtp-username" defaultValue="your-username" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smtp-password">SMTP Password</Label>
              <Input
                id="smtp-password"
                type="password"
                defaultValue="your-password"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Google Gemini API Key</h3>
            <div className="grid gap-2">
              <Label htmlFor="gemini-api-key">API Key</Label>
              <Input id="gemini-api-key" defaultValue="your-api-key" />
            </div>
            <div className="text-sm text-muted-foreground">
              The Google Gemini API key is required for integrating with the
              Gemini platform.
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Resume</h3>
            <div className="grid gap-2">
              <Label htmlFor="resume">Resume</Label>
              <div className="flex items-center gap-2">
                <Input id="resume" type="file" accept=".pdf,.docx" />
                <div className="text-sm text-muted-foreground">
                  Current resume:{" "}
                  <a href="#" className="underline">
                    resume.pdf
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}

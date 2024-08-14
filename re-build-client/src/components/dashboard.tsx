import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  return (
      <Card>
        <CardHeader>
          <CardTitle>File Upload</CardTitle>
          <CardDescription>
            Upload files and view your upload history.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="file-upload">Select a file</Label>
                <Input id="file-upload" type="file" />
              </div>
              <Button>Upload</Button>
            </div>
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Upload History</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="w-full">
                  <CardContent className="grid gap-3">
                    <div className="flex items-center gap-3">
                      <FileIcon className="h-6 w-6 text-muted-foreground" />
                      <div>
                        <div className="font-medium">example.pdf</div>
                        <div className="text-sm text-muted-foreground">
                          Uploaded on Aug 13, 2024
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground">2.3 MB</div>
                      <Button variant="ghost" size="sm">
                        <DownloadIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent className="grid gap-3">
                    <div className="flex items-center gap-3">
                      <FileIcon className="h-6 w-6 text-muted-foreground" />
                      <div>
                        <div className="font-medium">image.jpg</div>
                        <div className="text-sm text-muted-foreground">
                          Uploaded on Aug 12, 2024
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground">1.5 MB</div>
                      <Button variant="ghost" size="sm">
                        <DownloadIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent className="grid gap-3">
                    <div className="flex items-center gap-3">
                      <FileIcon className="h-6 w-6 text-muted-foreground" />
                      <div>
                        <div className="font-medium">document.docx</div>
                        <div className="text-sm text-muted-foreground">
                          Uploaded on Aug 11, 2024
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground">3.1 MB</div>
                      <Button variant="ghost" size="sm">
                        <DownloadIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  );
}

function DownloadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function Applications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Job Listings</CardTitle>
        <CardDescription>View and manage job postings.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Job Description</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Resume</TableHead>
              <TableHead>
                <span className="sr-only">Edit</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Acme Inc</TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>jobs@acme.com</TableCell>
              <TableCell>2023-08-01</TableCell>
              <TableCell>
                <Badge variant="outline">Open</Badge>
              </TableCell>
              <TableCell>
                <Link href="#" className="underline" prefetch={false}>
                  View Resume
                </Link>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <FilePenIcon className="h-4 w-4" />
                      <span className="sr-only">Edit job</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <div className="grid gap-2">
                        <div className="space-y-1">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" defaultValue="Acme Inc" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="job-description">Job Description</Label>
                          <Textarea id="job-description" defaultValue="Software Engineer" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" defaultValue="jobs@acme.com" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" defaultValue="2023-08-01" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="status">Status</Label>
                          <Select id="status" defaultValue="open">
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="open">Open</SelectItem>
                              <SelectItem value="closed">Closed</SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="resume">Resume</Label>
                          <Input id="resume" type="file" />
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vercel</TableCell>
              <TableCell>Product Manager</TableCell>
              <TableCell>jobs@vercel.com</TableCell>
              <TableCell>2023-07-15</TableCell>
              <TableCell>
                <Badge variant="outline">Closed</Badge>
              </TableCell>
              <TableCell>
                <Link href="#" className="underline" prefetch={false}>
                  View Resume
                </Link>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <FilePenIcon className="h-4 w-4" />
                      <span className="sr-only">Edit job</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <div className="grid gap-2">
                        <div className="space-y-1">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" defaultValue="Vercel" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="job-description">Job Description</Label>
                          <Textarea id="job-description" defaultValue="Product Manager" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" defaultValue="jobs@vercel.com" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" defaultValue="2023-07-15" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="status">Status</Label>
                          <Select id="status" defaultValue="closed">
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="open">Open</SelectItem>
                              <SelectItem value="closed">Closed</SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="resume">Resume</Label>
                          <Input id="resume" type="file" />
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shopify</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell>jobs@shopify.com</TableCell>
              <TableCell>2023-06-30</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>
                <Link href="#" className="underline" prefetch={false}>
                  View Resume
                </Link>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <FilePenIcon className="h-4 w-4" />
                      <span className="sr-only">Edit job</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <div className="grid gap-2">
                        <div className="space-y-1">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" defaultValue="Shopify" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="job-description">Job Description</Label>
                          <Textarea id="job-description" defaultValue="Frontend Developer" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" defaultValue="jobs@shopify.com" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" defaultValue="2023-06-30" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="status">Status</Label>
                          <Select id="status" defaultValue="pending">
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="open">Open</SelectItem>
                              <SelectItem value="closed">Closed</SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="resume">Resume</Label>
                          <Input id="resume" type="file" />
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>

  )
}


function FilePenIcon(props: any) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}

import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive(
    {
        selector: '[appIfHighRating]',
        standalone: true,
    }
)
export class AppIfHighRating{
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef)
    {}

    @Input() set appIfHighRating(rating: number)
    {
        if (rating > 4.3)
        {
            if (this.viewContainer.length == 0)
            {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } 
        else
        {
            this.viewContainer.clear();
        }
    }
}
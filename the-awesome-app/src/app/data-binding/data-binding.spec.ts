import {DataBindingComponent} from './data-binding.component';
import {TestBed} from '@angular/core/testing';


fdescribe("DataBindingComponent", () => {


    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [DataBindingComponent],
            imports:[],
            providers: []
        })
        .compileComponents();

    })


    it("Test1", () => {
        
        const componentFixture = TestBed.createComponent(DataBindingComponent);
        const instance = componentFixture.componentInstance;
        expect(instance.count).toBe(10);
    });

    it("Test2", () => {
        const componentFixture = TestBed.createComponent(DataBindingComponent);
        const instance = componentFixture.componentInstance;
        instance.inc("", undefined);
        expect(instance.count).toBe(11);
    });


})
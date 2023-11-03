function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        controller: 'MemberController',
        controllerAs: 'member',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}